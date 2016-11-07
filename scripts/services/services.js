'use strict';

angular.module('dashboard')

.service('dashboardFactory', function() {

    var users = [{
        "type": "member",
        "id": "1",
        "attributes": {
            "created": 1477502666,
            "updated": 1477502679,
            "email": "email@gmail.com",
            "first_name": "Rebesiko",
            "last_name": "Takaruko",
            "user_type": "PATIENT",
            "birth_date": "1961-12-10",
            "age": 54,
            "phone_mobile": "4312286847",
            "about_me": "Jeffrey  is a data management / database expert with a strong research background. He has been working for many years (since 2005) as a Data Warehouse Architect / BI Specialist and has solid experience in large Enterprise Data Warehousing projects and expertise in the following areas: Data Warehouse Architecture, Dimensional Modelling, ETL Design, ETL flows Performance Optimization, BI tools. Currently, he is actively involved in the design and performance tuning of heavy data management tasks over Cloudera Hadoop on an Oracle Big Data Appliance (Oracle BDA). Through the years of working with Oracle, Nikos has gained deep experience in a vast range of Oracle database areas either as a developer, or as a DBA. Due to his database research background, as well as the many years of working experience with large Oracle Data Warehouses, he has gained significant expertise and is particularly interested in the design, implementation and performance tuning of heavy data management tasks. He has solid software implementation skills and has programmed over the years in multiple languages. He particularly enjoys programming in Haskell, Oracle SQL & PL/SQL and C++.",
            "condition_id": "1",
            "avatar_link": "https://www.gravatar.com/avatar/205e460b479ab8aec07710c08d50.jpg?d=retro"
        },
        "relationships": {},
        "links": {
            "self": "https://localhost/dashboard/member/133451"
        }
    }, {
        "type": "member",
        "id": "2",
        "attributes": {
            "created": 1477502639,
            "updated": 1477502732,
            "email": "someMail@gmail.com",
            "first_name": "Dowozano",
            "last_name": "Sudegifi",
            "user_type": "PATIENT",
            "birth_date": "1931-08-13",
            "age": 85,
            "phone_mobile": "1234567890",
            "about_me": "Jack Spa is an acknowledged expert in the areas of computer mediated collaboration and user-centric software design, with a specific emphasis on the patterns of technology deployment and group dynamics that enable successful team collaboration and organizational agility. His specialties include working at the (and on the) intersection of people and technology. Spa currently focuses on working with clients to develop Digital Transformation Strategies that takes advantage of the blossoming API Economy including Cloud Computing, Personal Data Ecosystem, Digital Identity, Software as a Service, and The Internet of Things.",
            "condition_id": "2",
            "avatar_link": "https://www.gravatar.com/avatar/305e460b479ab9aec07710c08d50.jpg?d=retro"
        },
        "relationships": {},
        "links": {
            "self": "https://localhost/dashboard/member/133399"
        }
    }, {
        "type": "member",
        "id": "3",
        "attributes": {
            "created": 1477502666,
            "updated": 1477502679,
            "email": "myEmail@gmail.com",
            "first_name": "Sumach",
            "last_name": "Ecks",
            "user_type": "PATIENT",
            "birth_date": "1964-12-10",
            "age": 51,
            "phone_mobile": "6517286847",
            "about_me": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna erat, iaculis ut metus eget, rutrum vestibulum justo. In vehicula velit mi, molestie accumsan diam porttitor ultricies. Suspendisse in arcu orci. Integer lectus lectus, dignissim eu sodales sed, imperdiet quis lorem. Maecenas efficitur posuere quam, non cursus augue luctus in. Vestibulum vel quam vel purus bibendum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer convallis sem porta, gravida tellus id, congue mauris. In pellentesque, dui ornare ullamcorper suscipit, nibh nisl cursus odio, sit amet fringilla odio eros eget felis.",
            "condition_id": "3",
            "avatar_link": "https://www.gravatar.com/avatar/205e460b479ab8aec07710c08d50.jpg?d=retro"
        },
        "relationships": {},
        "links": {
            "self": "https://localhost/dashboard/member/133452"
        }
    }];


    var tasks = [{
        "type": "task",
        "id": "10",
        "meta": {},
        "attributes": {
            "role": "COACH",
            "created": 1473838364,
            "updated": 1474199410,
            "title": "Benefits",
            "status": "ENABLED",
            "state": "CREATED",
            "type": null
        },
        "relationships": {
            "member": {
                "links": {
                    "self": "https://localhost/dashboard/task/10/relationships/member",
                    "related": "https://localhost/dashboard/task/10/member"
                },
                "data": {
                    "type": "user",
                    "id": "1"
                }
            },
            "category": {
                "links": {
                    "self": "https://localhost/dashboard/task/10/relationships/category",
                    "related": "https://localhost/dashboard/task/10/category"
                },
                "data": {
                    "type": "category",
                    "id": "100"
                }
            }
        },
        "links": {
            "self": "https://localhost/dashboard/task/10"
        }
    }, {
        "type": "task",
        "id": "30",
        "meta": {},
        "attributes": {
            "role": "COACH",
            "created": 1473838364,
            "updated": 1474199410,
            "title": "Health",
            "status": "ENABLED",
            "state": "DONE",
            "type": null
        },
        "relationships": {
            "member": {
                "links": {
                    "self": "https://localhost/dashboard/task/30/relationships/member",
                    "related": "https://localhost/dashboard/task/30/member"
                },
                "data": {
                    "type": "user",
                    "id": "1"
                }
            },
            "category": {
                "links": {
                    "self": "https://localhost/dashboard/task/30/relationships/category",
                    "related": "https://localhost/dashboard/task/30/category"
                },
                "data": {
                    "type": "category",
                    "id": "300"
                }
            }
        },
        "links": {
            "self": "https://localhost/dashboard/task/30"
        }
    }, {
        "type": "task",
        "id": "20",
        "meta": {},
        "attributes": {
            "role": "COACH",
            "created": 1474101499,
            "updated": null,
            "title": "Insurance",
            "status": "ENABLED",
            "state": "DONE",
            "type": null
        },
        "relationships": {
            "member": {
                "links": {
                    "self": "https://localhost/dashboard/task/20/relationships/member",
                    "related": "https://localhost/dashboard/task/20/member"
                },
                "data": {
                    "type": "user",
                    "id": "2"
                }
            },
            "category": {
                "links": {
                    "self": "https://localhost/dashboard/task/20/relationships/category",
                    "related": "https://localhost/dashboard/task/20/category"
                },
                "data": {
                    "type": "category",
                    "id": "200"
                }
            }
        },
        "links": {
            "self": "https://localhost/dashboard/task/20"
        }
    }];

    //Return all users from the dashBoard factory
    this.getUsers = function() {

        return users;

    };

    //Return a specific user
    this.getUser = function(id) {
        return _.find(users, { id: id });
    };

    //Return all tasks from the dashBoard factory
    this.getTasks = function() {

        return tasks;

    };

    //Return a specific task
    this.getTask = function(id) {
        return _.find(tasks, { id: id });
    };

});
