const { Book } = require('../models')

// select all Books
const index = async (req, res) => {
   try {
        const data = await Book.findAll()

        const result = {
            status: 'OK',
            data: data,
            code: 200
        }

        res.json(result) 
   } catch (error) {
        console.error(error);
       
        res.status(500).json({
            status: 'Error',
            message: 'Internal Server Error',
            code: 500
        });
   }
}

// create book
const store = async (req, res) => {
   try {
    // get request
    const { title, description } = req.body

    // store new book
    const data = await Book.create({ title, description })

    // send response
    res.status(201).json({
        status: 'OK',
        message: 'Data has been created',
        data: data,
        code: 201
    })
   } catch (error) {
    console.error(error);
   }
}

// show book 
const show = async (req, res) => {
  try {
    // Ambil id dari parameter URL
    const { id } = req.params;

    // Proses pencarian buku dengan menggunakan fungsi asinkron
    const book = await Book.findByPk(id);
    
    if (book === null) {
        res.status(404).json({
            status: 'OK',
            code: 404,
        });
    }

    res.json({
        status: 'OK',
        data: book,
        code: 200,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      status: 'FAILED',
      data: error,
      code: 404,
    });
  }
};

// update
const update = async (req, res) => {
    try {
        // get book by params id
        const { id } = req.params

        // get req body
        const { title, description } = req.body

        // update on db
        const data = await Book.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 'FAILED',
                data: `data book with id ${id} not found`,
                code: 404
            })
        }

        data.title = title
        data.description = description
        data.save() // save to db

        // res send
        res.json({
            status: 'OK',
            message: data,
            code: 200
        })
    } catch (error) {
        console.log(error);
    }
}

// delete
const destroy = async (req, res) => {
    try {
        const { id } = req.params

        // Proses pencarian buku dengan menggunakan fungsi asinkron
        const data = await Book.findByPk(id);

        if (data === null) {
            res.status(404).json({
                status: 'FAILED',
                message: `book with id ${id} not found`,
                code: 404
            })
        }

        data.destroy() // delete from db

        // res send
        res.json({
            status: 'OK',
            message: `book with id ${id} has been deleted`,
            code: 200
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { index, store, show, update, destroy }
