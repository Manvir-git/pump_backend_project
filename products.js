document.addEventListener('DOMContentLoaded', function() {
    const pumpGallery = document.getElementById('pumpGallery');

    
    // Sample pump data (replace with your own pump information)
    const pumps = [
        { name: 'V-50 feet Per Stage Borewell Submersible Pumps', image: 'images/a1.png',price:'MRP ₹79,000.00',link:'a1.html' },
        { name: 'V-5 Stainless Steel Borewell Submersible Pumps', image: 'images/a2.png',price:'MRP ₹67,400.00',link:'a2.html' },
        { name: 'Janta Series Borewell Submersible Pumps', image: 'images/a3.png',price:'MRP ₹66,575.00',link:'a3.html' },
        { name: 'V-4 Stainless Steel Pumps', image: 'images/a4.png',price:'MRP ₹61,300.00',link:'a4.html' },
        { name: 'V-6 Water Filled Borewell Submersible Pumps', image: 'images/a5.png',price:'MRP ₹45,300.00',link:'a5.html' },
        { name: 'V-5 Water filled Motor', image: 'images/v6.png',price:'MRP ₹36,925.00' ,link:'a6.html'},
        { name: 'V-4 Water filled motor Submersible Pumps', image: 'images/v7.png',price:'MRP ₹35,200.00',link:'a7.html'},
        {name: 'Horizontal Openwell Submersible Pumps (1.5 Hp)', image: 'images/v8.png',price:'MRP ₹21,600.00',link:'a8.html'},
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
