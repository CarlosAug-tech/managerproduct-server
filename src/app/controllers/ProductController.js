import Product from '../models/Product';
import User from '../models/User';
import File from '../models/File';

class ProductController {
  async show(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id, {
      include: [
        {
          model: File,
          as: 'imageproduct',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(product);
  }

  async store(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res.status(401).json({ error: 'You does not is a provider' });
    }

    const product = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      provider_id: req.userId,
    };

    await Product.create(product);

    return res.json(product);
  }

  async update(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id, {
      where: { provider_id: req.userId },
    });

    await product.update(req.body);

    const { name, description, price, avatarproduct } = await Product.findByPk(
      id,
      {
        include: [
          {
            model: File,
            as: 'imageproduct',
            attributes: ['id', 'path', 'url'],
          },
        ],
      }
    );

    return res.json({
      name,
      description,
      price,
      avatarproduct,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    await product.destroy();

    return res.json();
  }
}

export default new ProductController();
