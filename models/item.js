const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name for item']
    },
    cost:{
        type:Number,
        require:[true,'Please provide a cost for item']
    },
    classification:{
        type:String,
        enum:['Appetisers','Small','Medium','Large','Drinks','Desserts'],
        default:'Appetisers'
    }
});
// can think about doing a ReviewSchema later which ref item and member
// then a reviews property with value array, containing all review instances

// attach model to default mongoose connection
module.exports = mongoose.model('Item',ItemSchema);