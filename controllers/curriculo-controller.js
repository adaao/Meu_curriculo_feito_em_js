const CurriculoModel = require('../models/curriculo-model');

exports.getData = () => CurriculoModel;

exports.getName = () => CurriculoModel.name;

exports.getTitle = () => CurriculoModel.title;

exports.getProfession = () => CurriculoModel.profession;

exports.getDescription = () => CurriculoModel.description;

exports.getExperience = () => CurriculoModel.experience;

exports.getEducation = () => CurriculoModel.education;

exports.getSkills = () => CurriculoModel.skills;
