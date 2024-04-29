# Image Background Remover

This application's goal is to provide users with a simple way to remove backgrounds from their images. There are two versions available, each using different techniques to achieve this goal.

## Two ways to have Background Remover

Choose the version that best fits your needs:

Tool | Imgly Node Package | Remove.bg Api |
--- | --- | --- |
Description | Uses Imgly Node Package for background removal | Utilizes Remove.bg API for background removal |
Documentation | [Read documentation](https://www.npmjs.com/package/@imgly/background-removal-node) | [Generate API key at Remove.bg](https://www.remove.bg/api#remove-background) |

## Before and After Examples

### Using Imgly Node Package

**Before:**
![Before Image 1](https://github.com/nathan-dinh-dev/image-background-remover/blob/main/imgly%20version/original-image.jpg)

**After:**
![After Image 1](https://github.com/nathan-dinh-dev/image-background-remover/blob/main/imgly%20version/output.png)

Photo was taken by Andrea Piacquadio on [Pexels](https://www.pexels.com/photo/man-standing-near-building-white-black-turtleneck-shirt-874158/)

### Using Remove.bg API

**Before:**
![Before Image 2](https://github.com/nathan-dinh-dev/image-background-remover/blob/main/removebg%20api%20version/original-image.jpg)

**After:**
![After Image 2](https://github.com/nathan-dinh-dev/image-background-remover/blob/main/removebg%20api%20version/output.png)

Photo was taken on [Freepik](https://www.freepik.com/free-photos-vectors/person-smiling-orange-shirt/3#uuid=36049045-dba8-40ba-84aa-bf4b5aa4154e)

## Getting Started

Follow these steps to remove the background from your images:

1. **Choose the Tool**: Decide which version of the background remover you want to use based on your preferences and requirements.
   
2. **Setup**:
   - For Imgly Node Package:
     - Follow the documentation provided [here](https://www.npmjs.com/package/@imgly/background-removal-node) to install and configure the package.
   - For Remove.bg API:
     - Generate an API key by visiting [Remove.bg API](https://www.remove.bg/api#remove-background).
     - Replace "process.env.API_KEY" with your API key.

3. **Running the Tool**:
   - In the project directory, navigate to the directory of your chosen tool.
   - Place your image in the directory and update the path to the image if necessary.
   - Run the following command:
     ```
     node server.js
     ```
   - This will generate an output image with no background named "output.png".
   - Check the console for any lint errors.

## Frontend Integration

The frontend files are stored in the `client` directory. Currently, the uploading function is implemented. Planning to update it with backend API integration to store and display the background-removed image after generation. Just a basic core function at this stage.

## Contribution

If you'd like to contribute to the project, feel free to submit pull requests or open issues on our GitHub repository. Welcome any suggestions, bug reports, or feature requests.

