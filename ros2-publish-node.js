module.exports = function(RED) {
    return function (config) {
        const rclnodejs = require('rclnodejs');

        RED.nodes.createNode(this,config);
        var node = this;

        rclnodejs.init().then(() => {
            const rclnode = rclnodejs.createNode('publisher_example_node');
            const publisher = rclnode.createPublisher('std_msgs/msg/String', 'topic');

            this.on('input', function(msg) {
                node.warn(msg);
                // publisher.publish(msg);
                publisher.publish('hello world!');
                // msg.payload = msg.payload.toRos2();
            });

            rclnodejs.spin(rclnode);
        });

        node.on("close", function() {
          rclnodejs.shutdownAll();
        });
    }
}