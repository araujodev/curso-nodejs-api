import Bill from "./../schema/Bill";

export default (req, res) => {
  Bill.findByIdAndRemove(req.params.id)
    .then(() => {
      return res.status(204).end();
    })
    .catch(err => {
      return res.status(500).json({ status: false, data: {} });
    });
};
