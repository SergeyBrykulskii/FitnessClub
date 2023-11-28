import New from '../models/News.js';

export const getAll = (req, res) => {
  New.find()
    .then(news => {
      res.json(news);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Что-то пошло не так',
      });
    });
};

export const getById = (req, res) => {
  New.findById(req.params.id)
    .then(news => {
      res.json(news);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Что-то пошло не так',
      });
    });
};

export const create = async (req, res) => {
  try {
    const newPost = new New(req.body);

    await newPost.save();

    res.json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Что-то пошло не так',
    });
  }
};

export const update = (req, res) => {
  const newId = req.params.id;
  const updateFields = {
    title: req.body.title,
    preview: req.body.preview,
    content: req.body.content,
  };

  New.findByIdAndUpdate(newId, updateFields)
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Что-то пошло не так',
      });
    });
};

export const deleteById = (req, res) => {
  const newId = req.params.id;

  New.deleteOne({ _id: newId })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).json({
          message: 'Не найдено',
        });
      }

      return res.json({
        success: true,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Что-то пошло не так',
      });
    });
};