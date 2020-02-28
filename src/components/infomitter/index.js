const allfields = Symbol('any name of keys');
export function createInfomitter() {
    // eslint-disable-next-line no-extend-native
    Object.prototype.infomitter = {
        show: function() { console.log(JSON.stringify(this.store)) },
        components: new Set(),
        store: null,
        init: function(store) {
            this.store = store;
            return 'store init done';
        },
        setIc: function(stateObj) {
            const keys = Object.keys(stateObj);
            keys.forEach(key => {
                this.store[key] = stateObj[key];
            });
            this.update(keys);
        },
        getIc: function(component, ...fields) {
            if (fields.length > 0) {
                this.connect(component, fields)
            } else {
                this.connect(component, [allfields])
            }
            
            return this.store;
        },
        connect: function(componentLink, fields) {
            componentLink.fields = fields;
            this.components.add(componentLink);
        },
        update: function(keys) {
            console.log(this.components);

            this.components.forEach(component => {
                component.fields.forEach(key => {
                    keys.forEach(keyI => {
                        if (keyI === key || key === allfields) {
                            component.forceUpdate();
                        }
                    });
                });
            });
        }
    }

    return Object.prototype.infomitter;
}