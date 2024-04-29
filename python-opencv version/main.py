import cv2
import numpy as np

# Parameters
BLUR = 21

# Lower threshold
CANNY_THRESH_1 = 10

# Upper threshold
CANNY_THRESH_2 = 100

# Dilation adds pixels to the boundaries of objects in image
MASK_DILATE_ITER = 1

# Erosion removes pixels on the boundaries of objects in image
MASK_ERODE_ITER = 3

# Read image
img = cv2.imread('original-image.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Edge detection
edges = cv2.Canny(gray, CANNY_THRESH_1, CANNY_THRESH_2)
edges = cv2.dilate(edges, None)
edges = cv2.erode(edges, None)

# Find contours in edges, sort by area
contour_info = []
contours, _ = cv2.findContours(edges, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
for c in contours:
    contour_info.append((
        c,
        cv2.isContourConvex(c),
        cv2.contourArea(c),
    ))
contour_info = sorted(contour_info, key=lambda c: c[2], reverse=True)
max_contour = contour_info[0]

# Generate an empty mask and draw a solid polygon on it that matches the shape of the largest contour
# Mask is black, polygon is white
mask = np.zeros(edges.shape)
cv2.fillConvexPoly(mask, max_contour[0], 255)

# Smooth mask, then blur it
mask = cv2.dilate(mask, None, iterations=MASK_DILATE_ITER)
mask = cv2.erode(mask, None, iterations=MASK_ERODE_ITER)
mask = cv2.GaussianBlur(mask, (BLUR, BLUR), 0)

# Create 3-channel alpha mask
mask_stack = np.dstack([mask] * 3)

# Blend masked img into MASK_COLOR background
mask_stack = mask_stack.astype('float32') / 255.0
img = img.astype('float32') / 255.0
masked = (mask_stack * img) + (1 - mask_stack)
masked = (masked * 255).astype('uint8')

# Display output image
cv2.imshow('img', masked)
cv2.waitKey()
cv2.imwrite("output.png", masked)
