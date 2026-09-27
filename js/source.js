$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************


    // Display the single values in the header, stat cards, and notifications
    function loadStats() {
        $('#username').text(username);
        $('.revenue-amt').text(revenueAmt);
        $('#customer-num').text(customerNum);
        $('#orders-amt').text(ordersAmt);
        $('#issues-amt').text(issuesAmt);
        $('#notification-num').text(notifAmt);
    }
    loadStats();


    // Build a table row for each sale and add it to the Sales Summary table
    function loadSales() {
        sales.forEach( sale => {
            const row = $("<tr>");
            row.html(`<td>${sale.product}</td><td>${sale.quantity}</td><td>${sale.revenue}</td>`);
            $('#salesTableBody').append(row);
        })
    }
    loadSales();


    // Build a table row for each customer and add it to the Recent Customers table
    function loadCustomers() {
        customers.forEach( customer => {
            let statusClass = 'status-active';
            if (customer.status == 'Pending') {
                statusClass = 'status-pending';
            }

            const row = $("<tr>");
            row.html(`<td>${customer.name}</td><td>${customer.email}</td><td><span class="status ${statusClass}">${customer.status}</span></td><td>${customer.joined}</td>`);
            $('#customerTableBody').append(row);
        })
    }
    loadCustomers();


    // Build a list item for each activity and add it to the Recent Activity list
    function loadActivities() {
        activities.forEach( activity => {
            const listItem = $("<li>");
            listItem.html(`${activity.message}`);
            $('#activity-list').append(listItem);
        })
    }
    loadActivities();


    // Build a list item for each system message and add it to the System Status list
    function loadSystemStatus() {
        messages.forEach( message => {
            const listItem = $("<li>");
            listItem.html(`${message.messsage}`);
            $('#system-status-list').append(listItem);
        })
    }
    loadSystemStatus();


    // Build a list item for each notification and add it to the Notifications list
    function loadNotifications() {
        notifications.forEach( notification => {
            const listItem = $("<li>");
            listItem.html(`${notification.messsage}`);
            $('#notifications-list').append(listItem);
        })
    }
    loadNotifications();


    // Build a list item for each task and add it to the Tasks list
    function loadTasks() {
        tasks.forEach( task => {
            const listItem = $("<li>");
            listItem.html(`${task.messsage}`);
            $('#tasks-list').append(listItem);
        })
    }
    loadTasks();


    });