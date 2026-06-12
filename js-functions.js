const students=[
    {
        name:"Abhishek",
        course:"Full Stack Web Development",
        marks:[22,19,26,24,25]
    },
    {
        name:"Akash",
        course:"Full Stack Web Development",
        marks:[20,19,16,24,15]
    },
    {
        name:"Raju",
        course:"Full Stack Web Development",
        marks:[20,19,26,24,15]
    },
    {
        name:"Aman",
        course:"Full Stack Web Development",
        marks:[20,29,16,24,15]
    },
    {
        name:"Anu",
        course:"Full Stack Web Development",
        marks:[20,19,16,24,25]
    }
];

for(let obj of students){
    console.log(obj.name);
    console.log(obj.course);
    let totalMarks=obj.marks.reduce((acc,curr)=>acc+curr,0);
    console.log(`Total Marks obtained: `,totalMarks);
    let percentage=totalMarks/150;
    if(totalMarks>60){
        console.log("Passed Successfully");
    }else{
        console.log("Failed!, Better luck next time.")
    }
}


