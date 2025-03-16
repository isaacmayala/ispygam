 // Game data for Cape Town image
        const gameItems = [
            { id: "tablemountain", name: "Table Mountain", coords: "368,150,80", shape: "circle" },
            { id: "lionshead", name: "Lion's Head Mountain", coords: "260,220,40", shape: "circle" },
            { id: "stadium", name: "Cape Town Stadium", coords: "450,400,50", shape: "circle" },
            { id: "marina", name: "V&A Waterfront", coords: "100,450,60", shape: "circle" },
            { id: "signalhill", name: "Signal Hill", coords: "200,300,45", shape: "circle" },
            { id: "devilspeak", name: "Devil's Peak", coords: "480,220,40", shape: "circle" }
        ];
        
        let itemsFound = 0;
        let totalItems = gameItems.length;
        
        // Initialize the game
        function initGame() {
            // Reset game state
            itemsFound = 0;
            
            // Clear existing items and areas
            document.getElementById('items').innerHTML = '';
            document.getElementById('image-map').innerHTML = '';
            document.getElementById('message').textContent = '';
            document.getElementById('play-again').style.display = 'none';
            
            // Add items to the list
            const itemsList = document.getElementById('items');
            gameItems.forEach(item => {
                const li = document.createElement('li');
                li.id = `list-${item.id}`;
                li.textContent = item.name;
                itemsList.appendChild(li);
            });
            
            // Create image map areas
            const imageMap = document.getElementById('image-map');
            gameItems.forEach(item => {
                const area = document.createElement('area');
                area.id = item.id;
                area.alt = item.name;
                area.title = item.name;
                area.coords = item.coords;
                area.shape = item.shape;
                area.href = "#";
                
                // Add event listener
                area.addEventListener('click', function(e) {
                    e.preventDefault();
                    foundItem(item.id);
                }, false);
                
                imageMap.appendChild(area);
            });
        }
        
        // Handle when an item is found
        function foundItem(itemId) {
            const listItem = document.getElementById(`list-${itemId}`);
            
            // Check if the item has already been found
            if (listItem.classList.contains('found')) {
                return;
            }
            
            // Mark item as found
            listItem.classList.add('found');
            itemsFound++;
            
            // Check if all items have been found
            if (itemsFound === totalItems) {
                document.getElementById('message').textContent = 'Congratulations! You found all Cape Town landmarks!';
                document.getElementById('play-again').style.display = 'inline-block';
            }
        }
        
        // Replay the game
        function replay() {
            location.reload();
        }
        
        // Initialize the game when the page loads
        window.onload = function() {
            initGame();
        };
