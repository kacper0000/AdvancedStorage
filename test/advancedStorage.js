const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', ()=> {
    let advancedStorage = null;
    before( async () => {
        advancedStorage = await AdvancedStorage.deployed();
    });
    it('Should add an ID to ids array', async ()=> {
        await advancedStorage.add(0);
        const result = await advancedStorage.ids(0);
        assert(result.toNumber() === 0);
    });
    it('Should get an element from ids array', async ()=> {
        await advancedStorage.add(20);
        const result = await advancedStorage.get(1);
        assert(result.toNumber() === 20);
    });
    it('Should get all elements of ids array', async ()=> {
        const rawId = await advancedStorage.getAll();
        const ids = rawId.map(id => id.toNumber()); 
        assert.deepEqual(ids, [0, 20]);
    });
    it('Should restrun the length to ads array', async ()=> {
        const length = await advancedStorage.length();
        assert(length.toNumber() === 2);
    });
});
    

