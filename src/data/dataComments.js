let dataComments = [
    {
        id: 1,
        user_img:
            'https://robohash.org/rerumveniamfugit.png?size=58x58&set=set1',
        name: 'Lissa',
        date: '9/8/2021',
        text: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        value: 3,
    },
    {
        id: 2,
        user_img:
            'https://robohash.org/quaeratvoluptatibuset.png?size=58x58&set=set1',
        name: 'Breanne',
        date: '7/28/2022',
        text: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        value: 5,
    },
    {
        id: 3,
        user_img:
            'https://robohash.org/quiavoluptatibusoptio.png?size=58x58&set=set1',
        name: 'Karlis',
        date: '10/12/2021',
        text: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        value: 4,
    },
    {
        id: 4,
        user_img:
            'https://robohash.org/similiqueconsecteturut.png?size=58x58&set=set1',
        name: 'Geri',
        date: '8/9/2021',
        text: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        value: 4,
    },
    {
        id: 5,
        user_img: 'https://robohash.org/dictasedsed.png?size=58x58&set=set1',
        name: 'Etty',
        date: '11/17/2021',
        text: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        value: 4,
    },
    {
        id: 6,
        user_img:
            'https://robohash.org/estnonprovident.png?size=58x58&set=set1',
        name: 'Zolly',
        date: '2/22/2022',
        text: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        value: 3,
    },
    {
        id: 7,
        user_img: 'https://robohash.org/velanimiest.png?size=58x58&set=set1',
        name: 'Carlota',
        date: '12/22/2021',
        text: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        value: 4,
    },
    {
        id: 8,
        user_img:
            'https://robohash.org/dignissimosvoluptatesest.png?size=58x58&set=set1',
        name: 'Peterus',
        date: '7/14/2021',
        text: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        value: 4,
    },
    {
        id: 9,
        user_img:
            'https://robohash.org/nobisesseimpedit.png?size=58x58&set=set1',
        name: 'Blakeley',
        date: '7/15/2022',
        text: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        value: 1,
    },
    {
        id: 10,
        user_img:
            'https://robohash.org/perspiciatisutquisquam.png?size=58x58&set=set1',
        name: 'Eugene',
        date: '4/7/2023',
        text: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        value: 2,
    },
    {
        id: 11,
        user_img: 'https://robohash.org/quisestnisi.png?size=58x58&set=set1',
        name: 'Gabbie',
        date: '9/16/2022',
        text: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        value: 2,
    },
    {
        id: 12,
        user_img: 'https://robohash.org/rerumeaiusto.png?size=58x58&set=set1',
        name: 'Amie',
        date: '5/31/2023',
        text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        value: 4,
    },
    {
        id: 13,
        user_img:
            'https://robohash.org/exercitationemvoluptasfugiat.png?size=58x58&set=set1',
        name: 'Bernadette',
        date: '5/14/2022',
        text: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        value: 2,
    },
    {
        id: 14,
        user_img: 'https://robohash.org/nobisoditquia.png?size=58x58&set=set1',
        name: 'Jeniece',
        date: '2/16/2023',
        text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        value: 1,
    },
    {
        id: 15,
        user_img: 'https://robohash.org/sintveleum.png?size=58x58&set=set1',
        name: 'Muire',
        date: '7/9/2022',
        text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        value: 5,
    },
    {
        id: 16,
        user_img: 'https://robohash.org/omnisistefugit.png?size=58x58&set=set1',
        name: 'Arabela',
        date: '4/9/2023',
        text: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        value: 2,
    },
    {
        id: 17,
        user_img: 'https://robohash.org/rerumquoeos.png?size=58x58&set=set1',
        name: 'Horatio',
        date: '7/31/2022',
        text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        value: 2,
    },
    {
        id: 18,
        user_img:
            'https://robohash.org/hicaperiamnihil.png?size=58x58&set=set1',
        name: 'Celestina',
        date: '1/11/2022',
        text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        value: 3,
    },
    {
        id: 19,
        user_img:
            'https://robohash.org/quiaccusantiumlaudantium.png?size=58x58&set=set1',
        name: 'Marion',
        date: '11/6/2021',
        text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        value: 4,
    },
    {
        id: 20,
        user_img: 'https://robohash.org/ataofficiis.png?size=58x58&set=set1',
        name: 'Dag',
        date: '2/11/2023',
        text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        value: 5,
    },
];

export default dataComments;
