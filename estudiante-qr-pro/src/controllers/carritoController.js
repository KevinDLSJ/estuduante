//esta funcion hace que aparezca toda la informacion de la tabla carrito
function indexcr(req, res) {
  const name = req.oidc.user.email
  req.getConnection((err, conn) => {
    //hace una consulta en la base de datos y recupera la informacion consultado
    conn.query('SELECT a.id_producto, a.id_usuario, b.name, a.cantidad, b.precio FROM carrito a, product b  WHERE a.id_producto=b.id_producto and a.id_usuario=?', [name],(err, pers) => {
      if (err) {
        res.json(err);
      }
      console.log("--------", pers)
      //rederiza la pagina de carrito
      res.render('pages/carrito', { pers, name: req.session.name });
    });
  });
}

//agrega los productos solicitados al carrito de compras por medio de los queries 
//se definen dos constantes y recolecta el email obtenuido del auth0
function agregar(req, res) {
  const data = req.body
  const name = req.oidc.user.email

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM carrito WHERE id_producto = ? AND id_usuario = ?', [data.id_producto, name], (err, rows) => {
      //valida si ya existe el producto, si es asi se actualiza la columna de cantidad agregando una unidad mas
      if (rows.length > 0) {
        const can = rows[0].cantidad + 1
        req.getConnection((err, conn) => {
          conn.query('UPDATE carrito SET cantidad = ? WHERE id_producto= ? AND id_usuario = ?', [can, data.id_producto, name], (err, carr) => {
            if (err) throw err;
            res.redirect('/carrito')
          });
        });
      } else {
        //agrega los productos solicitados al carrito de compras por medio de los queries 
        req.getConnection((err, conn) => {
          conn.query('INSERT INTO carrito SET id_producto = ?, id_usuario = ?,cantidad = 1', [data.id_producto, name], (err, carr) => {
            if (err) throw err;
            res.redirect('/');

          });
        });
      }
    })
  })
}

//esta funcion selecciona, actualiza y/o borra la columna de cantidad
//recolecta el correo del usuario del auth0 
function elimina(req, res) {
  const data = req.body;
  const name = req.oidc.user.email
  console.log(data)
  req.getConnection((err, conn) => {
    //selecciona la tabla de carrito
    conn.query('SELECT * FROM carrito WHERE id_producto = ? AND id_usuario = ?', [data.id_producto, name], (err, rows) => {
      console.log(rows)
      //valida si ya existe el producto, si es asi se actualiza la columna de cantidad restando una unidad
      const can = rows[0].cantidad - 1;
      if (can >= 1) {
        req.getConnection((err, conn) => {
          conn.query('UPDATE carrito SET cantidad = ? WHERE id_producto= ? AND id_usuario = ?', [can, data.id_producto, name], (errr, carr) => {
            if (errr) throw err;
            res.redirect('/carrito')
          });
        });
      } else {
        //si esta la cantidad de una unidad, se elimina de la tabla de carrito
        req.getConnection((errr, conn) => {
          conn.query('DELETE FROM carrito WHERE id_producto= ? AND id_usuario = ?', [data.id_producto, name], (err, carr) => {
            if (errr) throw err;
            res.redirect('/carrito');

          });
        });
      }
    })
  })
}

//se exportan las funciones globalmente 
module.exports = {
  indexcr,
  agregar,
  elimina
}