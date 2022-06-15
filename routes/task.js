const router = require('express').Router();

const Item = require('../models/task');

router.post('/', (req, res) => {
    const itemToPost = new Item({ 
      name: req.body.name 
    }); 
    itemToPost.save() 
      .then(item => 
        res.json(item)) 
  })


  router.get('/', (req, res) => { 
    Item.find()
      .then(items => res.json(items)) 
  })


  router.put('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        item.update()
          .then(() => res.json({ success: true }))
          // return 404 if not found
          .catch(err => res.status(404).json({ success: false }) )
      })
  })


  router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)        
      .then(item => {            
        item.remove()                
        .then(() => res.json({ 
          success: true }))                
        // return 404 if not found                
        .catch(err => res.status(404).json({ success: false }) )    
      }) 
  })
module.exports = router;