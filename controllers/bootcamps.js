
// @desc.    Get all bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public

exports.getBootcamps = (req, res, next) => {

  throw new Error()
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })

}


// @desc.    Get all bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` })

}


// @desc.    Create new bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })

}

// @desc.    Update new bootcamp
// @route    Put /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Udpate bootcamp ${req.params.id}` })

}

// @desc.    Delete bootcamp
// @route    DELETE /api/v1/bootcamps
// @access   Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` })

}