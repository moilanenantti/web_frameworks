                    <form className="form" onSubmit={handleSubmit} >
                        <input name="id" type="text" autoComplete="off" value={data.id} readOnly/>
                        <input name="title" type="text" autoComplete="off" value={formData.title} param={data.title} onChange={(e) => setFormData({...formData, title: e.target.value, })} />
                        <input name="description" type="text" autoComplete="off" value={formData.description} param={data.description} onChange={(e) => setFormData({...formData, description: e.target.value, })} />
                        <input name="price" type="number" min="0" autoComplete="off" value={formData.price} param={data.price} onChange={(e) => setFormData({...formData, price: e.target.value, })} />
                        
             
                        <input name="rating" type="number" min="1" max="5" autoComplete="off" value={formData.rating} param={data.rating} onChange={(e) => setFormData({...formData, rating: e.target.value, })} />
                        <input name="rating_img" type="text" autoComplete="off" value={formData.rating_img}  param={data.rating_img} onChange={(e) => setFormData({...formData, rating_img: e.target.value, })} />
                        <input name="category" type="text" autoComplete="off" value={formData.category} param={data.category} onChange={(e) => setFormData({...formData, category: e.target.value, })} />
                        <input name="thumbnail" type="text" autoComplete="off" value={formData.thumbnail} param={data.thumbnail} onChange={(e) => setFormData({...formData, thumbnail: e.target.value, })} />
                        
                        <input type="submit" value="Modify product" onClick={() => setFormData({...formData, id: `${data.id}`, })}/>
                    </form>