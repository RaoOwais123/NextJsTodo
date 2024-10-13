
const todos = [
    {
        id : 1,
        task : "Sleeping",
        isCompleted: false,
    }
];


export async function GET(request){
    return Response.json({
        todos,
        msg: "Todos Fetched Successfully"
    });
}

export async function POST(request){
    let todo = await request.json();
    todo.isCompleted = false;
    todo.id = todos.length + 1;
    todos.push({...todo});
    return Response.json({
        todos,
        msg: "Todos Added Successfully"
    });
}

export async function PUT(request){
    let obj = await request.json();
    let userInd = todos.findIndex((todo) => todo.id == obj.id);
    todos[userInd].isCompleted = !todos[userInd].isCompleted;
    return Response.json({
        todos,
        msg: "Todos Updated Successfully"
    });
}

export async function DELETE(request){
    let obj = await request.json();
    let userInd = todos.findIndex((todo) => todo.id == obj.id);
    todos.splice(userInd, 1);
    return Response.json({
        todos,
        msg: "Todos Deleted Successfully",
      });

}