const multer  = require('multer')

//const upload = multer({dest:'images/'});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    if(file!==null){
      const ext = file.originalname.split('.').pop();
      cb(null, Date.now()+'.'+ext);
    }
   
  }
})

const filtro =(req,file,cb) => {
  if(file && (file.mimetype==='image/jpg' || file.mimetype ==="image/jpeg" || file.mimetype==='image/png')){
    cb(null,true)
    
  }
  else {
    cb(null,false)
  }
}

const upload = multer({ storage: storage, fileFilter: filtro})

module.exports=upload