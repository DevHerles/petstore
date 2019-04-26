openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        start: function() {
            //console.log("pet store home page loaded");
        //this.$el.append(QWeb.render("AppointmentDashboardView"));
          var products = new local.ChartWidget(this, ["cpu", "mouse", "keyboard", "graphic card", "screen"], "#00FF00");
          products.appendTo(this.$el);
        },
    });

    local.ChartWidget = instance.Widget.extend({
        template: "ChartWidget",
        init: function(parent, data, color) {
            this._super(parent);
            this.data = data;
            this.color = color;
        },
    });
    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}
