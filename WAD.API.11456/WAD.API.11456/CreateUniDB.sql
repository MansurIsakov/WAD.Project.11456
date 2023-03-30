declare @DataDirectory varchar(2000) = 'C:\Users\misakov\Desktop\WAD.Project.11456\WAD.API.11456\WAD.API.11456\AppData\'

declare @sql nvarchar(max) = 'CREATE DATABASE UniDB          
        ON PRIMARY (
           NAME=db_data,
           FILENAME = ''{DataDirectory}\UniDB.mdf''
        )
        LOG ON (
            NAME=db_log,
            FILENAME = ''{DataDirectory}\UniDB.ldf''
        )'
set @sql = replace(@sql, '{DataDirectory}', @DataDirectory)
exec (@sql)
GO
use UniDB 
GO
/*******************************************************************************
   Create Tables
********************************************************************************/
GO
set language english;
GO
CREATE TABLE [dbo].[Universities]
(
    [Id] INT NOT NULL IDENTITY,
    [Name] NVARCHAR(200) NOT NULL,
    [ShortName] NVARCHAR(200) NOT NULL,
    [Description] NVARCHAR(1000) NOT NULL,
    [Courses] NVARCHAR(1000) NOT NULL,
    [Rating] DECIMAL NOT NULL,
    [Admission] NVARCHAR(200) NOT NULL,
    [Scolarship] INT NOT NULL,
    [TuitionFee] INT NOT NULL,
    [EstablishedIn] INT NOT NULL,
    [Image] NVARCHAR(200) NOT NULL,
    [Location] NVARCHAR(200) NOT NULL,
    CONSTRAINT [PK_University] PRIMARY KEY CLUSTERED ([Id])
);
GO
CREATE TABLE [dbo].[Blogs]
(
    [Id] INT NOT NULL IDENTITY,
    [Title] NVARCHAR(50) NOT NULL,
    [CoverImage] NVARCHAR(200) NOT NULL,
    [Author] NVARCHAR(200) NOT NULL,
    [Content] NVARCHAR(2000) NOT NULL,
    [CreatedAt] NVARCHAR(200) NOT NULL,
    [LikeCount] INT NOT NULL,
    [UniversityId] INT NOT NULL,
    CONSTRAINT [PK_Blog] PRIMARY KEY CLUSTERED ([Id]),
    CONSTRAINT [FK_University] FOREIGN KEY ([UniversityId]) REFERENCES [dbo].[Universities]([Id])
);
GO

INSERT INTO [dbo].[Universities]
([Name], [ShortName], [Description], [Courses], [Rating], [Admission], [Scolarship], [TuitionFee], [EstablishedIn], [Image], [Location])
VALUES (
    'Westminster International University in Tashkent',
    'WIUT',
    'Westminster International University in Tashkent (WIUT) is the first international university located in the heart of Central Asia to offer a Western-style education with UK qualifications. WIUT offers a wide range of programmes, all in English, academic and research activities, as well as social events. Independent learning is an essential part of the UK education system, and WIUT is no exception. WIUT students can often be found in the Learning Resource Centre (LRC), computer rooms and innovation labs, working on projects and discussing course content with their peers. Other times, students may be found making the most of the University’s exceptional sports facilities or engaging in the many social and cultural events organized by the Students’ Union.',
    'Become a student at the Westminster International University in Tashkent (WIUT) and explore your full potential. From Certificate in International Foundation Studies (CIFS) to Ph.D., WIUT has been assisting students to achieve their academic and career goals since 2002.
    As one of the best international universities in Uzbekistan offering UK higher education, we look forward to supporting your academic endeavours with award-winning faculty, cutting-edge technology and state-of-the-art equipment in the heart of Tashkent.',
    5.00,
    'https://www.youtube.com/embed/MP7tvHk2shY',
    30,
    3000,
    2002,
    'https://science.wiut.uz/images/wiut.jpg',
    'Istiqbol, 12, Tashkent, Uzbekistan'
)
INSERT INTO [dbo].[Universities]
([Name], [ShortName], [Description], [Courses], [Rating], [Admission], [Scolarship], [TuitionFee], [EstablishedIn], [Image], [Location])
VALUES (
    'Webster University in Tashkent',
    'WUT',
    'As an accredited, private, non-profit university, our number one goal is to prepare you to become a lifelong learner and leader.
    Webster provides challenging programs built to teach students soft skills necessary to succeed in today`s world. 
    With small class sizes, you will receive individual attention and mentorship from our internationally qualified faculty, who bring real-life knowledge to the classroom.',
    'At Webster, students have the opportunity to take our Global Citizenship curriculum and electives along with classes for their major. Electives are subjects taken outside of major requirements, and Global Citizenship classes are aimed at providing young people with an international perspective and wide knowledge in the arts, sciences and humanities. To graduate, our students must complete 120 credit hours of coursework, including their major and Global Citizenship requirements.',
    5.00,
    'https://www.youtube.com/embed/Q9JBwOmXLvM',
    0,
    3200,
    2019,
    'https://news.webster.edu/_resources/images/icon-banners-749x474/tashkent-facade-749.jpg',
    'st. Navoiy, 13, Tashkent, Uzbekistan'
)
INSERT INTO [dbo].[Universities]
([Name], [ShortName], [Description], [Courses], [Rating], [Admission], [Scolarship], [TuitionFee], [EstablishedIn], [Image], [Location])
VALUES (
    'INHA University in Tashkent',
    'IUT',
    'Inha University is among the “TOP 10” of the most significant universities in Korea, and its technical departments are in fourth place in the ranking of “Best Universities”. The slogan of the University combines three main areas of the ideology: “Creativity, hard work, service to society.”',
    'Computer and Science Engineering (CSE) – a course combining electrical engineering and computer science required for the development of computer systems.
    Information and Communication Engineering (ICE) – a training course for specialists in the management for the storage, processing and transmission of data, as well as database management programs.',
    5.00,
    'https://www.youtube.com/embed/PaE0kf0PQig',
    30,
    3700,
    2014,
    'https://inha.uz/wp-content/uploads/2021/08/PicsArt_08-07-05.49.27-1024x519.jpg',
    'st. Ziyolilar, 9, Tashkent, Uzbekistan'
)
INSERT INTO [dbo].[Universities]
([Name], [ShortName], [Description], [Courses], [Rating], [Admission], [Scolarship], [TuitionFee], [EstablishedIn], [Image], [Location])
VALUES (
    'Management Development Institute of Singapore in Tashkent',
    'MDIST',
    'Management Development Institute of Singapore in Tashkent was established in 2007 by Uzbekistan Banking Association (UBA) and the Management Development Institute of Singapore (MDIS). Its permanent partners providing educational programmes - the Bangor University (UK) and Sunderland University (UK) are known as leading British universities placed in the Top 1000 World University Rankings. In addition, in the 2020 MDIS Tashkent signed a partnership agreement with a new UK partner - Teesside University.',
    'Bangor Business School at Bangor University is a leading teaching and research focused business school offering a full range of disciplines from undergraduate to doctoral level. We have been described as "The School that means Business" and as a "Centre of Specialised Excellence"',
    5.00,
    'https://www.youtube.com/embed/5TEU1d4vwLI',
    0,
    3200,
    2007,
    'https://www.mdis.uz/assets/public/images/slider_default.jpg',
    'st. Bunyodkor Avenue, 28, Tashkent, Uzbekistan'
)
INSERT INTO [dbo].[Universities]
([Name], [ShortName], [Description], [Courses], [Rating], [Admission], [Scolarship], [TuitionFee], [EstablishedIn], [Image], [Location])
VALUES (
    'Akfa University',
    'AU',
    'At AKFA University, we are committed to empowering everyone who joins our community. Our goal is to create an environment that enables learners to thrive, grow, and achieve what they believe is unachievable. Openness and diversity of thought, innovation, critical thinking, self-expression, ethics, awareness of social responsibilities, and entrepreneurship are some of the qualities we cherish strongly in our students.',
    'As Dean of the AU Engineering School, I sincerely welcome you to our School, which brings together an outstanding community of students, faculty, and staff members. I invite you to look through the web pages of our programs and faculty members to learn more about the wide range of courses we offer and the impressive research by our faculty members.',
    5.00,
    'https://www.youtube.com/embed/_Uc3-P_herM',
    0,
    5000,
    2020,
    'https://akfauniversity.org/wp-content/uploads/2020/07/bayraklar.png',
    'st. Miliy Bog, 28, Tashkent, Uzbekistan'
)

INSERT INTO [dbo].[Blogs]
([Title], [CoverImage], [Author], [Content], [CreatedAt], [LikeCount], [UniversityId])
VALUES (
    'Dummy Blog #1`', 
    'https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80', 
    'Martin Scorsese', 
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 
    'Sun Mar 26 2023 13:56:04 GMT+0500 (Uzbekistan Standard Time)',
    0,
    1
)

INSERT INTO [dbo].[Blogs]
([Title], [CoverImage], [Author], [Content], [CreatedAt], [LikeCount], [UniversityId])
VALUES (
    'Dummy Blog #2`', 
    'https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
    'Cristopher Nolan', 
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 
    'Sun Mar 26 2023 13:56:04 GMT+0500 (Uzbekistan Standard Time)',
    0,
    2
)

INSERT INTO [dbo].[Blogs]
([Title], [CoverImage], [Author], [Content], [CreatedAt], [LikeCount], [UniversityId])
VALUES (
    'Dummy Blog #3`', 
    'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 
    'David Martin', 
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 
    'Sun Mar 26 2023 13:56:04 GMT+0500 (Uzbekistan Standard Time)',
    0,
    2
)

GO