const list = require("../Database/DAO");

const listcheck = (id , name) => {
    for(let i=0; i < list.length; i++) {
        if(id == list[i].id && name == list[i].name) {
            return 1;
        }else {
            return 0;
        }
    }
}

const member = () => {
    return list;
}


module.exports = {listcheck, member};