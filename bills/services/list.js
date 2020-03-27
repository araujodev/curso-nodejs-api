import Bill from "./../schema/Bill";

export default (req, res) => {
  Bill.find({})
    .then(list => {
      if (!list || !list.length) {
        return res.status(404).json({ status: false, data: [] });
      }
      return res.status(200).json({ status: true, data: list });
    })
    .catch(err => {
      return res.status(500).json({ status: false, data: [] });
    });
};
