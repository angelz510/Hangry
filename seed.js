const db = require('./models');
const Post = require('./models/Post');



const newUsers = [
    {
        name: 'Angel',
        email: 'angelz510@gmail.com',
        password: 'ImfromOakland',
       
    },
    {
        name: 'Joe Schmoe',
        email: 'jschmoe@gmail.com',
        password: 'Pa55word',
       
    }, 
    {
        name: 'Fulano de Tal',
        email: 'fulanito@gmail.com',
        password: 'fiesta',
        
    },
    {
        name: 'Hella Hangry',
        email: 'hellahangry@gmail.com',
        password: '12345',
     
    },
    {
        name: 'Beni',
        email: 'beni@beni.com',
        password: '12345',
      
    }

];


const newRestaurants = [
    {
        name: 'Super Duper',
        location: '346 Kearny Street, San Francisco, CA 94103',
        hours: '7AM-10PM',
        type: 'burger',
    
    },
    {
        name: 'The Melt',
        location: '455 Market Street, San Francisco, CA 94103',
        hours: '10AM-9PM',
        type: 'burger',
    
    },
    {
        name: 'Pearl\'s Deluxe Burgers',
        location: '708 Post Street, ',
        hours: '11AM-10PM',
        type: 'burger',
        
    },
    {
        name: 'Bamboo Asia',
        location: '311 California Street, San Francisco, CA 94103',
        hours: '11AM-7PM',
        type: 'asian',
        
    },
    {
        name: 'Freshroll',
        location: '220 Bush Street, San Francisco, CA 94103',
        hours: '11AM-3PM',
        type: 'asian',
        
    },
    {
        name: 'BibimBar',
        location: '320 Bush Street, San Francisco, CA 94103',
        hours: '10AM-5PM',
        type: 'asian',
        
    },
    {
        name: 'Tropisueno',
        location: '75 Yerba Buena Lane, San Francisco, CA 94103',
        hours: '10AM-10PM',
        type: 'mexican',
        
    },
    {
        name: 'Uno Dos Tacos',
        location: '595 Market Street, San Francisco, CA 94103',
        hours: '7AM-9PM',
        type: 'mexican',
        
    },
    {
        name: 'Panzon',
        location: '53 Stevenson Street, San Francisco, CA 94105',
        hours: '630AM-4PM',
        type: 'mexican',
        
    },
    {
        name: 'Curry Up Now',
        location: '225 Bush Street, San Francisco, CA 94103',
        hours: '11AM-2PM',
        type: 'indian',
        
    },
    {
        name: 'North India Restaurant',
        location: '123 Stevenson Street, San Francisco, CA 94103',
        hours: '10AM-11PM',
        type: 'indian',
        
    },
    {
        name: 'Raavi',
        location: '533 Jackson Street, San Francisco, CA 94133',
        hours: '11AM-10PM',
        type: 'indian',
        
    },
    {
        name: 'Pachino Pizzeria',
        location: '318 Kearny Street, San Francisco, CA 94104',
        hours: '11AM-10PM',
        type: 'pizza',
        
    },
    {
        name: 'Uncle Vito\'s Pizza',
        location: '700 Bush Street, San Francisco, CA 94108',
        hours: '11AM-11PM',
        type: 'pizza',
        
    },
    {
        name: 'Pizzeria Delfina',
        location: '680 Mission Street, San Francisco, CA 94105',
        hours: '1130AM-10PM',
        type: 'pizza',
    
    }

];


const newPosts = [
    {
        rating: '3',
        comment: 'this place was great!',
    },
    {
        rating: '2',
        comment: 'the tacos were bomb but would have liked spicier salsa!!',
    },
    {
        rating: '3',
        comment: 'best pizza in fidi!',
    },
    {
        rating: '3',
        comment: 'Those garlic fries though!! So good!',
    },
    {
    rating: '3',
    comment: 'This place knows how to make a breakfast taco!! Great eggs and fresh tortilla. Watch out though the chorizo is spicy. Really spicy!',
    },

    
];

//------------------POPULATE DB--------------------------//

// db.User.deleteMany({}, (err, users)=>{
//     console.log('removed all users');
//     db.User.insertMany(newUsers, (err, users) => {
//         console.log('added new user data');
//     });
// });


// db.Restaurant.deleteMany({}, (err, restaurants) => {
//     console.log('removed all restaurants');
//     db.Restaurant.insertMany(newRestaurants, (err, restaurants) => {
//         console.log('added new restaurant data');
//     });
// });

// db.Post.deleteMany({}, (err, posts) => {
//    console.log('removed all posts', posts)
//     db.Post.insertMany(newPosts, (err, posts) => {
//         if (err) {
//             console.log(err);
//             process.exit();
//         }
//         console.log('added new posts');
//     });
// });

///-------------REFERENCE ASSOCIATION-------------///

// db.Restaurant.findOne({name: 'Uno Dos Tacos'}, (err, foundRestaurant) => {
//     if(err){
//         console.log(err);
//         process.exit();
//     }
//     db.Post.findOne({comment:'the tacos were bomb but would have liked spicier salsa!!'}, (err, foundPost) => {
//         if (err) {
//             console.log(err);
//             process.exit();
//         }

//         foundPost.restaurant = foundRestaurant._id;
//         foundPost.save((err, savedPost) => {
//             if (err){
//                 console.log(err);
//                 process.exit();
//             }

//             console.log('Success', savedPost);
//         });
//     });
// });


//---------------EMBEDDED REFERENCE---------------///

// db.User.findOne({name: 'Angel'}, (err, foundUser) => {
//     if (err){
//         console.log(err);
//         process.exit();
//     }

//     db.Post.findOne({comment: 'the tacos were bomb but would have liked spicier salsa!!'}, (err, foundPost) => {
//         if (err){
//             console.log(err);
//             process.exit();
//         }
//         console.log(foundUser, foundPost);

//         foundUser.posts.push(foundPost);

//         foundUser.save((err, savedUser) => {
//             console.log(savedUser);
//         });
//     });
// });