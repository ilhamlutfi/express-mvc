const index = async (req, res) => {
    return res.render('home/index', {
        title: 'Beranda'
    });
}

module.exports = ({ index });
