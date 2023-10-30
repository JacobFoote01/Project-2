

function Car(){
    
    // Get a reference to the container element
    const container = document.getElementById("container");
    
    // Create a new box element
    const box = document.createElement("div");
    box.className = "box";
    
    // Create an image element
    const image = document.createElement("img");
    image.src = "your_image_url.jpg";
    image.alt = "Image Alt Text";
    
    // Create a paragraph element for the description
    const description = document.createElement("p");
    description.textContent = "Description goes here.";
    
    // Append the image and description to the box element
    box.appendChild(image);
    box.appendChild(description);
    
    // Append the box element to the container
    container.appendChild(box);
    
    return(
        box
    )
}
    export default Car