import Product from '../models/Product';
import File from '../models/File';

class ProductProviderController {
  async index(req, res) {
    const products = await Product.findAll({
      where: { provider_id: req.userId },
      include: [
        {
          model: File,
          as: 'imageproduct',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(products);
  }
}

export default new ProductProviderController();
