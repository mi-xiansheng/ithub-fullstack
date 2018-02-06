
exports.showCreate = (req,res) => {
	res.send('get showCreate');
}
exports.create = (req,res) => {
	res.send('post create');
}
exports.showDetail = (res,req) => {
	res.send('get showDetail');
}
exports.showEdit = (res,req) => {
	res.send("get showEdit");
}
exports.edit = (res,req) => {
	res.send('post edit');
}
exports.delete = (res,req) => {
	res.send('post delete')
}