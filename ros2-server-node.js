module.exports = function(RED) {
  return function (config) {
    const rclnodejs = require('rclnodejs');

    RED.nodes.createNode(this,config);
    var node = this;

    node.closing = false;

    this.nodename = config.nodename;
    this.topicname = config.topicname;

    function startconn() {
      rclnodejs.init().then(() => {
        node.rclnodejs = rclnodejs;
        node.emit("ros2 connected");
      });
    }

    startconn();
    node.closing = false;

    node.on("close", function() {
      rclnodejs.shutdownAll();
    });
  }
}