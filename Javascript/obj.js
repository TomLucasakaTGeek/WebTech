const allUsers=[
    {
        Name:"harkirat",
        gender:"male"
    },{
            Name:"naman",
            gender:"male"
    },{
        Name:"priya",
        gender:"female"
    }
    ]
    
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i]["gender"]=="male")
            console.log(allUsers[i]["Name"])
    }