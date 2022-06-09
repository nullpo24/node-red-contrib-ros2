module.exports = function(RED) {
    return function (config) {
      const rclnodejs = require('bindings')('rclnodejs');
  
      RED.nodes.createNode(this,config);
      var node = this;
  
      var subscriber;
      var ros2;

    //   node.server.on('ros2 connected', () => {
    //       ros2 = rclnodejs.createNode('subscription_node');

    //       ros2.createSubscription('std_msgs/msg/String', 'topic', (msg) => {
    //         console.log(`Received message: ${typeof msg}`, msg);
    //       });

    //       topicQuery(node.topic);

    //   });

        node.send('a-001');
        rclnodejs.init().then(() => {
          node.send('b-001');
          const rclnode = rclnodejs.createNode('subscription_example_node');

          rclnode.createSubscription('std_msgs/msg/String', 'chatter', (msg) => {
            node.send(`Received message: ${typeof msg}`, msg);
        });

        rclnodejs.spin(node);
      });
    }
}