# Categorias para votar
- Melhor ator e atriz
- Melhor coadjuvante homem e mulher
- Melhor edição
- Melhor clipe
- Melhor figurino

# Categorias dos votos no banco de dados
- actor: needs student_id
- actress: needs student_id
- supporting_actor: needs student_id
- supporting_actress: needs student_id
- edition: needs video_clip_id
- video_clip: needs video_clip_id
- costume: needs video_clip_id

# Regras de negócio do voto
- Um estudante pode ter apenas um voto por categoria
- Para um estudante poder receber voto de melhor ator/atriz ele necessita estar participando de algum clipe
- Um menino não pode receber voto de melhor atriz e vice-versa
