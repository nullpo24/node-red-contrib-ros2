module.exports = function(RED) {
  return function (config) {
        
    RED.nodes.createNode(this,config);
    var node = this;

    node.server = RED.nodes.getNode(config.server);

    node.server.on('ros2 connected', () =>{
      var rclnodejs = node.server.rclnodejs;
      const rclnode = rclnodejs.createNode(node.server.nodename);

      rclnode.createSubscription('std_msgs/msg/String', node.server.topicname, (data) => {
        node.send({payload: data});
      });

      rclnodejs.spin(rclnode);
    });

  }
}