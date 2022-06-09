module.exports = function(RED) {
    return function (config) {
      const rclnodejs = require('rclnodejs');
  
      RED.nodes.createNode(this,config);
      var node = this;

      rclnodejs.init().then(() => {
        const rclnode = rclnodejs.createNode('subscription_example_node');

        rclnode.createSubscription('std_msgs/msg/String', 'chatter', (data) => {
          node.send({payload: data});
        });

        rclnodejs.spin(rclnode);
      });

      node.on("close", function() {
        rclnodejs.shutdownAll();
      });
    }
}