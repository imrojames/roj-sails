const pageContent = require('../../config/pageContent.json');

module.exports = {
    index: async function (req, res) {
        try {
            return res.view('pages/index', {
                personalInfo: pageContent.personalInfo,
                profession: pageContent.profession,
                about: pageContent.about
            })
        } catch (err) {
            return res.serverError(err)
        }
    }
}