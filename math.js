function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}
// module.exports = add;
// module.exports = sub; by doing this sub function will override the add function so  what we have to do istopass a object like

module.exports = {
    add: add,
    sub: sub
};

// we also export in this way 

// exports.add = (a,b)=>  a + b;
// exports.sub = (a,b)=> a - b;
