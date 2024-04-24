// document.addEventListener('DOMContentLoaded', function() {
//     const pumpGallery = document.getElementById('pumpGallery');

//     // Sample pump data (replace with your own pump information)
//     const pumps = [
//         { name: 'Rust free V4- Stainless Steel Pumps ', image: 'v4.png' },
//         { name: 'Rust free V4- Stainless Steel Pumps', image: 'v42.png' },
//         { name: 'V3-Oil Filled Motor', image: 'v3.png' },
//         { name: 'V3- Water Filled Borewell Submersible Motor', image: 'v32.png' },
//         { name: 'V4- Oil Filled Motor', image: 'v40.png' },
//         { name: 'OW- Water Filled Motor', image: 'ow.png' },
        
//         // Add more pumps as needed
//     ];

//     // Function to generate pump gallery
//     function generatePumpGallery() {
//         pumps.forEach(pump => {
//             const pumpItem = document.createElement('div');
//             pumpItem.classList.add('pump-item');

//             const pumpImage = document.createElement('img');
//             pumpImage.src = pump.image;
//             pumpImage.alt = pump.name;
//             pumpItem.appendChild(pumpImage);

//             const readMoreButton = document.createElement('button');
//             readMoreButton.classList.add('read-more-btn');
//             readMoreButton.textContent = 'Read More';
//             pumpItem.appendChild(readMoreButton);

//             pumpGallery.appendChild(pumpItem);
//         });
//     }

//     // Generate pump gallery when DOM content is loaded
//     generatePumpGallery();
// });




document.addEventListener('DOMContentLoaded', function() {
    const pumpGallery = document.getElementById('pumpGallery');

    
    // Sample pump data (replace with your own pump information)
    const pumps = [
        { name: 'Rust free V4- Stainless Steel Pumps ', image: 'images/v4.png',price:'MRP ₹16,975.00',link:'r1.html' },
        { name: 'Rust free V4- Stainless Steel Pumps', image: 'images/v42.png',price:'MRP ₹16,250.00',link:'r2.html' },
        { name: 'V3-Oil Filled Motor', image: 'images/v3.png',price:'MRP ₹15,975.00',link:'r3.html' },
        { name: 'V3- Water Filled Borewell Submersible Motor', image: 'images/v32.png',price:'MRP ₹13,800.00',link:'r4.html' },
        { name: 'V4- Oil Filled Motor', image: 'images/v40.png',price:'MRP ₹12,525.00',link:'r5.html' },
        { name: 'OW- Water Filled Motor', image: 'images/ow.png',price:'MRP ₹9,575.00',link:'r6.html' },
        { name: 'OW – Dry Type Openwell Submersible Motor', image: 'images/OW1.png',price:'MRP ₹15,500.00',link:'r7.html' },
        // Add more pumps as needed
    ];

    // Function to generate pump gallery
    function generatePumpGallery() {
        pumpGallery.innerHTML = ''; // Clear existing content

        pumps.forEach(pump => {
            const pumpItem = document.createElement('div');
            pumpItem.classList.add('pump-item');

            const pumpImage = document.createElement('img');
            pumpImage.src = pump.image;
            pumpImage.alt = pump.name;
            pumpItem.appendChild(pumpImage);

            const pumpInfo = document.createElement('div');
            pumpInfo.classList.add('pump-info');

            const pumpName = document.createElement('p');
            pumpName.textContent = pump.name;
            pumpInfo.appendChild(pumpName);

            const pumpPrice = document.createElement('p');
            pumpPrice.textContent = 'Price: ' + pump.price;

            
            const buyNowButton = document.createElement('button');
            buyNowButton.textContent = 'Read more';
            
            // Define the URL you want to open in a new tab
            const linkUrl =pump.link;
            
            // Add click event listener to the button
            buyNowButton.addEventListener('click', function() {
                // Open the linkUrl in a new tab
                window.open(linkUrl, '_blank');
            });

            pumpInfo.appendChild(pumpPrice);
            pumpInfo.appendChild(buyNowButton);
            pumpItem.appendChild(pumpInfo);
            pumpGallery.appendChild(pumpItem);
        });
    }



    // Generate pump gallery when DOM content is loaded
    generatePumpGallery();
});



