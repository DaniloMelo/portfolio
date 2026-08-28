INSERT INTO me (
    id,
    name,
    email,
    avatar_url,
    job_title,
    introduction,
    about,
    phone,
    linkedin_profile_url
)
VALUES (
    '6d4c1b85-66e8-43f2-a6d0-8d40d8f8e8c7',
    'Danilo',
    'teste@email.com',
    'https://github.com/DaniloMelo.png',
    'Desenvolvedor Web Full Stack',
    'Transformando ideias em realidade através do código',
    'Sobre de teste',
    '11 98589-8826',
    'https://www.linkedin.com/in/danilo-marques-de-melo'
);

INSERT INTO credentials (
    id,
    password_hash,
    me_id
)
VALUES (
    '947a443b-a021-49a1-a41b-ac86bdf67f9c',
    '$2a$12$L3Okm1HEtxKfOHoEvGyIR.NPSTjgWnufetWfDlMOREojVjgwyC9Jm',
    '6d4c1b85-66e8-43f2-a6d0-8d40d8f8e8c7'
);

INSERT INTO technologies (
    id,
    name
)
VALUES 
('f032345e-305b-48e3-9e62-966248aace64', 'JavaScript'),
('f4bf0a8c-0118-4660-8f66-a65fc2dff071', 'TypeScript'),
('4af424cd-2e92-4e14-8897-a0dafd7a33a3', 'Node.js');