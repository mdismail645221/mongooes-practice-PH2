=========> mongoose opererations with NoSQL booster application <==========

    01. --->eq(equal operator methods)
        db.practice.find({favoutiteColor: {$eq: "Blue"}})

    02. $ne (not equal operator)
        db.practice.find({gender: {$eq: "Female"}}).project({gender: 1, name: 1})

    03. $gt/ $gte (grater then operator)
        db.practice.find({age: {$gt : 18}}).projection({age: 1})
        db.practice.find({age: {$gte: 18}}).project({age: 1}).sort({age: 1})--[assending sorting] / sort({age: 1}) (desendign sorting)

    04. $lt/ $lte (less then operator)
        db.practice.find({roll: {$lt: 10}}).project({age: 1}).sort({age: 1})
        db.practice.find({})

    05. ($gt:18, $lt: 30)  emplecept and operator
        db.practice.find({age: {$gte: 18, $lt: 30}})

    <!-- implicit And Operator -->
    06. in operator (OR Operator এর কাজ করে থাকে। হয় এটা না ঐটা হবে)    explecept operator  যেমন:
        db.practice.find({gender: 'Female', age: {$in: [18, 23]}}) --এখানে মেয়ে হতে হবে,  যাদের বয়স 18 অথবা 23  হবে , শুধু ঐই বয়সগুলো রিটার্ন করবে তোমাকে । এই হলো in operator

    07. nin operator -- অথার্ৎ তুমি যে যে ভ্যালু দিয়ে সে সে ভ্যালূ ছাড়া অন্য ভ্যালূ রিটার্ন করবে তোমাকে।
        db.practice.find({gender: 'Female', age: {$nin : [17, 20]}})

    08. Multiply operator [condition: যেসব মেয়ের বয়স 17, 18 বাদে সব মেয়ে রিটার্ন দাও এবং যে মেয়ে Gaming এবং Travelling করে তাদের দাও]

        db.collection.find({gender: 'Female', age: {$nin: [17, 18]}, interests: {$nin: ['Gamming, Travelling]} })

02 . PART (logical query operator)

2.1: And operator
db.practice.find({
$and: [
        {gender: 'Female'},
        {age: {$lt: 30}},
{"skills.name": 'JAVASCRIPT'}
]
}).project({gender: 1, age: 1, "skills.name": 1})

03 . OR Operator

    db.practice.find({
    $or: [
            {age: {$lt: 30}},
    {"skill.name": 'JAVASCRIPT'}
    ]
    }).project({age: 1, "skills.name": 1})

    এর থেকে সহজে করা যায় $in operator দিয়ে...

    db.practice.find({"skills.name: {$in : ['JAVASCRIPT', 'PYTHON']}})


// যদি সেইম ফিল্ড হয় তাহলে implecit operator ব্যবহার করতে পারবে না।  simple operator কে বলা হয়ে থাকে। 
// আর যদি সেইম ফিল্ড না হয় তাহলে explecit operator ব্যবহার করতে পারবে। ($and operator কে বলা হয়ে থাকে explecit operator)
//

04. indexing operator 
    db.practice.find({"interests.0": "Travelling"}).project({"interests": 1})

05. $all operator 
    db.practice.find({interests: {$all: ['Travelling', 'Gaming']}}).project({interests: 1})

06. 