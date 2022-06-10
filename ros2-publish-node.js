module.exports = function(RED) {
  return function (config) {

    RED.nodes.createNode(this,config);
    var node = this;

    node.server = RED.nodes.getNode(config.server);

    node.server.on('ros2 connected', () =>{
      var rclnodejs = node.server.rclnodejs;  
      const rclnode = rclnodejs.createNode(node.server.nodename);
      const publisher = rclnode.createPublisher('std_msgs/msg/String', node.server.topicname);

      this.on('input', function(msg) {
        publisher.publish(msg.payload);
      });

      rclnodejs.spin(rclnode);
    });

  }
}