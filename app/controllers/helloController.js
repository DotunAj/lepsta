class helloController {
  static index(req, res) {
    return res.status(200).json({
      status: "success",
      message:
        "Hello your Api setup is ready for you to hack away! Happy building",
      data: {}
    });
  }

  static lepsta(req, res) {
    return res.status(200).json({
      status: "success",
      message: "Lepsta",
      data: {
        name: "Dotun",
        title: "Mr"
      }
    });
  }
}

export default helloController;
