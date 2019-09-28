class authController {
  static login(req, res) {
    return res.status(200).json({
      status: "success",
      message:
        "Hello your Api setup is ready for you to hack away! Happy building",
      data: {
        password: req.body.password,
        email: req.body.email
      }
    });
  }

  /* static lepsta(req, res) {
    return res.status(200).json({
      status: "success",
      message: "Lepsta",
      data: {
        name: "Dotun",
        title: "Mr"
      }
    });
  } */
}

export default authController;
