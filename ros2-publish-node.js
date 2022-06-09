module.exports = function(RED) {
    return function (config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toRos2();
            node.send(msg);
        });
    }
}