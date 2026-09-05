// products: 100 products):
const products = [
    { 
        id: '001', 
        name: 'Wireless Noise-Canceling Headphones', 
        price: '249.99' 
    },
    { 
        id: '002', 
        name: 'Mechanical Gaming Keyboard', 
        price: '119.50' 
    },
    { 
        id: '003', 
        name: 'Ergonomic Wireless Mouse', 
        price: '59.99' 
    },
    { 
        id: '004', 
        name: '4K Ultra HD Computer Monitor', 
        price: '349.00' 
    },
    { 
        id: '005', 
        name: 'Portable External SSD 1TB', 
        price: '89.99' 
    },
    { 
        id: '006', 
        name: 'Smart Fitness Watch', 
        price: '199.95' 
    },
    { 
        id: '007', 
        name: '1080p HD Webcam with Microphone', 
        price: '45.00' 
    },
    { 
        id: '008', 
        name: 'Dual-Band Wi-Fi 6 Router', 
        price: '129.99' 
    },
    { 
        id: '009', 
        name: 'Bluetooth Pocket Speaker', 
        price: '34.99' 
    },
    { 
        id: '010', 
        name: 'Multi-Port USB-C Hub', 
        price: '29.50' 
    },
    { 
        id: '011', 
        name: 'Noise-Isolating Earbuds', 
        price: '79.99' 
    },
    { 
        id: '012', 
        name: 'Graphic Drawing Tablet', 
        price: '159.00' 
    },
    { 
        id: '013', 
        name: 'Adjustable Laptop Stand', 
        price: '24.99' 
    },
    { 
        id: '014', 
        name: 'Ring Light with Tripod Stand', 
        price: '39.95' 
    },
    { 
        id: '015', 
        name: 'Smart Power Strip with Surge Protection', 
        price: '19.99' 
    },
    { 
        id: '016', 
        name: 'Gaming Chair with Lumbar Support', 
        price: '189.99' 
    },
    { 
        id: '017', 
        name: 'Streaming Microphone with Pop Filter', 
        price: '89.50' 
    },
    { 
        id: '018', 
        name: 'RGB LED Desk Strip Lights', 
        price: '14.99' 
    },
    { 
        id: '019', 
        name: 'Electric Standing Desk Converter', 
        price: '149.00' 
    },
    { 
        id: '020', 
        name: 'Ultra-Wide Quad HD Monitor', 
        price: '429.99' 
    },
    { 
        id: '021', 
        name: 'Wireless Charging Pad 15W', 
        price: '22.50' 
    },
    { 
        id: '022', 
        name: 'Vertical Ergonomic Mouse', 
        price: '49.99' 
    },
    { 
        id: '023', 
        name: 'Compact Mechanical Keyboard 60%', 
        price: '69.99' 
    },
    { 
        id: '024', 
        name: 'External Hard Drive 2TB', 
        price: '64.99' 
    },
    { 
        id: '025', 
        name: 'USB-C to HDMI Adapter', 
        price: '15.99' 
    },
    { 
        id: '026', 
        name: 'True Wireless Sports Earbuds', 
        price: '129.99' 
    },
    { 
        id: '027', 
        name: 'Smart Home Voice Assistant Speaker', 
        price: '49.00' 
    },
    { 
        id: '028', 
        name: 'Wi-Fi Range Extender Repeater', 
        price: '35.99' 
    },
    { 
        id: '029', 
        name: 'Large Gaming Mouse Pad (Desk Mat)', 
        price: '18.50' 
    },
    { 
        id: '030', 
        name: 'Laptop Cooling Pad with 5 Fans', 
        price: '27.99' 
    },
    { 
        id: '031', 
        name: 'Bluetooth Audio Transmitter Receiver', 
        price: '21.99' 
    },
    { 
        id: '032', 
        name: '4K Action Camera Waterproof', 
        price: '99.99' 
    },
    { 
        id: '033', 
        name: 'Handheld Gimbal Stabilizer for Phone', 
        price: '119.00' 
    },
    { 
        id: '034', 
        name: 'Pocket-Sized Power Bank 20000mAh', 
        price: '39.99' 
    },
    { 
        id: '035', 
        name: 'Wireless Presenter Remote Clicker', 
        price: '16.99' 
    },
    { 
        id: '036', 
        name: 'Memory Card MicroSDXC 256GB', 
        price: '32.50' 
    },
    { 
        id: '037', 
        name: 'Smart LED Light Bulb (Color Changing)', 
        price: '12.99' 
    },
    { 
        id: '038', 
        name: 'Digital Alarm Clock with Wireless Charger', 
        price: '29.99' 
    },
    { 
        id: '039', 
        name: 'Active Noise Canceling Earphones', 
        price: '54.99' 
    },
    { 
        id: '040', 
        name: 'Mini Video Projector 1080p Supported', 
        price: '89.99' 
    },
    { 
        id: '041', 
        name: 'Dual Monitor Mount Stand Arm', 
        price: '45.99' 
    },
    { 
        id: '042', 
        name: 'Bluetooth Soundbar for TV & PC', 
        price: '79.00' 
    },
    { 
        id: '043', 
        name: 'Wireless Over-Ear Gaming Headset', 
        price: '109.99' 
    },
    { 
        id: '044', 
        name: 'USB Condenser Microphone Kit', 
        price: '49.95' 
    },
    { 
        id: '045', 
        name: 'Anti-Blue Light Gaming Glasses', 
        price: '23.99' 
    },
    { 
        id: '046', 
        name: 'Smart Video Doorbell Wireless', 
        price: '139.99' 
    },
    { 
        id: '047', 
        name: 'Indoor Security Camera 2K', 
        price: '39.99' 
    },
    { 
        id: '048', 
        name: 'Smart Plugs with Energy Monitoring', 
        price: '24.99' 
    },
    { 
        id: '049', 
        name: 'Electric Air Duster for Keyboard', 
        price: '38.50' 
    },
    { 
        id: '050', 
        name: 'Screen Cleaning Kit with Microfiber', 
        price: '9.99' 
    },
    { 
        id: '051', 
        name: 'High-Speed HDMI 2.1 Cable 6ft', 
        price: '11.99' 
    },
    { 
        id: '052', 
        name: 'Cat6 Ethernet Cable 50ft', 
        price: '14.50' 
    },
    { 
        id: '053', 
        name: 'Cable Management Sleeves 4-Pack', 
        price: '12.99' 
    },
    { 
        id: '054', 
        name: 'Under Desk Headphone Stand Hanger', 
        price: '10.99' 
    },
    { 
        id: '055', 
        name: 'USB 3.0 Flash Drive 128GB', 
        price: '17.99' 
    },
    { 
        id: '056', 
        name: 'Wireless Trackball Mouse', 
        price: '65.00' 
    },
    { 
        id: '057', 
        name: 'Numeric Keypad Wireless 22-Key', 
        price: '19.99' 
    },
    { 
        id: '058', 
        name: 'Hard Drive Docking Station Dual Bay', 
        price: '36.99' 
    },
    { 
        id: '059', 
        name: 'Internal NVMe M.2 SSD 1TB', 
        price: '94.99' 
    },
    { 
        id: '060', 
        name: 'DDR4 RAM Kit 16GB (2x8GB)', 
        price: '58.00' 
    },
    { 
        id: '061', 
        name: 'Thermal Paste High Performance', 
        price: '7.99' 
    },
    { 
        id: '062', 
        name: 'Portable Photo Printer Wireless', 
        price: '129.99' 
    },
    { 
        id: '063', 
        name: 'Document Scanner Portable', 
        price: '89.99' 
    },
    { 
        id: '064', 
        name: 'Drawing Tablet with Screen Display', 
        price: '299.00' 
    },
    { 
        id: '065', 
        name: 'Stylus Pen for Touch Screens', 
        price: '21.99' 
    },
    { 
        id: '066', 
        name: 'Tablet Stand Adjustable Aluminum', 
        price: '16.99' 
    },
    { 
        id: '067', 
        name: 'Magnetic Phone Mount for Car', 
        price: '13.50' 
    },
    { 
        id: '068', 
        name: 'Universal Travel Adapter World Plug', 
        price: '22.99' 
    },
    { 
        id: '069', 
        name: 'Solar Panel Charger Portable', 
        price: '49.99' 
    },
    { 
        id: '070', 
        name: 'Rechargeable AA Batteries 4-Pack', 
        price: '15.99' 
    },
    { 
        id: '071', 
        name: 'Smart Scale with Bluetooth BMI', 
        price: '26.99' 
    },
    { 
        id: '072', 
        name: 'Deep Tissue Massage Gun Quiet', 
        price: '59.99' 
    },
    { 
        id: '073', 
        name: 'Electric Toothbrush Sonic Smart', 
        price: '69.95' 
    },
    { 
        id: '074', 
        name: 'Wake Up Light Sunrise Alarm Clock', 
        price: '42.99' 
    },
    { 
        id: '075', 
        name: 'Air Purifier for Home HEPA Filter', 
        price: '89.99' 
    },
    { 
        id: '076', 
        name: 'Smart Essential Oil Diffuser Ultrasonic', 
        price: '31.50' 
    },
    { 
        id: '077', 
        name: 'Digital Meat Thermometer Instant Read', 
        price: '14.99' 
    },
    { 
        id: '078', 
        name: 'Milk Frother Handheld Battery Operated', 
        price: '9.99' 
    },
    { 
        id: '079', 
        name: 'Electronic Scale Kitchen Precision', 
        price: '12.50' 
    },
    { 
        id: '080', 
        name: 'Automatic Soap Dispenser Touchless', 
        price: '23.99' 
    },
    { 
        id: '081', 
        name: 'LED Motion Sensor Closet Lights', 
        price: '18.99' 
    },
    { 
        id: '082', 
        name: 'Laser Measure Tool 165ft Digital', 
        price: '34.99' 
    },
    { 
        id: '083', 
        name: 'Stud Finder Sensor Wall Scanner', 
        price: '21.50' 
    },
    { 
        id: '084', 
        name: 'Digital Caliper 6 Inch Stainless Steel', 
        price: '19.99' 
    },
    { 
        id: '085', 
        name: 'Magnifying Glass with LED Light', 
        price: '15.99' 
    },
    { 
        id: '086', 
        name: 'Luggage Scale Digital Portable', 
        price: '10.99' 
    },
    { 
        id: '087', 
        name: 'Tile Finder Bluetooth Tracker 2-Pack', 
        price: '47.99' 
    },
    { 
        id: '088', 
        name: 'Car Dash Cam 1080p Dash Camera', 
        price: '53.00' 
    },
    { 
        id: '089', 
        name: 'Bluetooth Car Adapter FM Transmitter', 
        price: '16.99' 
    },
    { 
        id: '090', 
        name: 'Tire Inflator Portable Air Compressor', 
        price: '39.99' 
    },
    { 
        id: '091', 
        name: 'OBD2 Scanner Car Diagnostic Tool', 
        price: '28.50' 
    },
    { 
        id: '092', 
        name: 'Jump Starter Power Bank 1500A', 
        price: '79.99' 
    },
    { 
        id: '093', 
        name: 'Wireless Headset for Office Phones', 
        price: '85.00' 
    },
    { 
        id: '094', 
        name: 'Cassette Player to MP3 Converter', 
        price: '24.99' 
    },
    { 
        id: '095', 
        name: 'Vinyl Record Player Turntable', 
        price: '68.99' 
    },
    { 
        id: '096', 
        name: 'Voice Recorder Digital Dictaphone', 
        price: '32.99' 
    },
    { 
        id: '097', 
        name: 'Metal Detector High Accuracy', 
        price: '115.00' 
    },
    { 
        id: '098', 
        name: 'Night Vision Goggles Digital Binoculars', 
        price: '159.99' 
    },
    { 
        id: '099', 
        name: 'Hand Warmers Rechargeable Electric', 
        price: '19.99' 
    },
    { 
        id: '100', 
        name: 'Smart Feed Automatic Pet Feeder', 
        price: '79.99' 
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const allCards = document.getElementById('all-cards');
    products.filter((item)=> {
        const id = item.id;
      
        const title = item.name;
        const price = item.price;

        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('cd-title');
        cardTitle.textContent = title;

        const cardPrice = document.createElement('p');
        cardPrice.classList.add('cd-subTitle');
        cardPrice.textContent = `$ ${price}`;

        const cardBtn = document.createElement('a');
        cardBtn.classList.add('cd-btn');
        cardBtn.href = `product-cart${id}`
        cardBtn.textContent = 'Add to cart';

        card.append(cardTitle, cardPrice, cardBtn);
        allCards.append(card);

        return;
    });

    //event delegation:
    allCards.addEventListener('click', (e)=> {
        //preventDefault:
        e.preventDefault();

        //currentTarget:
        console.log(e.currentTarget);
        
        console.log('clicked parent');
        
        // target:
        if (e.target.classList.contains('cd-btn')) {
            const card = e.target.closest('.card');
            console.log(`click card: ${card.dataset.id}`);
        };
    });

});