export default class ItemCloner {
    static clone(actorId, itemId) {
        const actor = this._findActor(actorId);
        const item = this._findOwnedItem(actor, itemId);
        const clone = this._makeClone(item);
        actor.createOwnedItem(clone);
    }

    static _findActor = actorId => game.actors.get(actorId);

    static _findOwnedItem = (actor, itemId) => actor.getOwnedItem(itemId);

    static _makeClone = item => ({ 
        ... item.data,
        name: `${item.data.name} Copy`
    });
}