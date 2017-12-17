(function() {
    // -------------------- load data ------------ //
    const customersContainer = document.getElementById('customers');
    const ordersContainer = document.getElementById('orders');
    
    

    Customers.getCustomers().then(buildNamedCustomersArr).then(buildCustomersHtml).then(getOrders);

    function showOrders(id, ordersContainer)
    {
        console.log(id);

    }

    function buildNamedCustomersArr(response)
    {
        var customers =JSON.parse(response);
        var namedCustomers=[];

        customers.forEach(function(element) {
            namedCustomers.push(new Customer(element));
        });

        return namedCustomers;

    }

    function buildCustomersHtml(namedCustomers)
    {
        const customersContainer = document.getElementById('customers');
        var custList = document.createElement('ul');
        
        customersContainer.appendChild(custList);

        namedCustomers.forEach(function(element) {
            var custListItem = document.createElement('li');
            custListItem.id = element.CustomerID;
            custListItem.innerText = element.CompanyName;
            custList.appendChild(custListItem);

            // attach onClick event listener and send element id + inject container to show data in
            custListItem.addEventListener('click', function() {
                s
                howOrders(custListItem.id);
            });


            
        });

        


        


    }
    // function buildCustomersHtml(response) {
    //     const drivers = JSON.parse(response);
    //     for(let i=0; i < drivers.length; i++) {
    //         const $driverDiv = document.createElement('div');
    //         $driverDiv.className = 'driver';
    //         $driverDiv.id = 'driver' + i;
    //         $driverDiv.addEventListener('drop', drop_handler);
    //         $driverDiv.addEventListener('dragover', dragover_handler);
    //         $driverDiv.innerHTML = drivers[i].name;
    //         document.getElementById('drivers').appendChild($driverDiv);
    //     }
        
    // }

    // function buildAddresses(data) {
    //     const addresses = JSON.parse(data);
    //     for(let i=0; i < addresses.length; i++) {
    //         const $addressDiv = document.createElement('p');
    //         $addressDiv.className = 'drag-item';
    //         $addressDiv.id = 'address' + i;
    //         $addressDiv.draggable = true;
    //         $addressDiv.addEventListener('dragstart', dragstart_handler);
    //         $addressDiv.innerHTML = addresses[i].street + addresses[i].houseNumber + addresses[i].city ;
    //         document.getElementById('addresses').appendChild($addressDiv);
    //     }

    // }
    // -------------------- create new data ------------ //
    const addAddressButton = document.getElementById('addAddress');
}());

