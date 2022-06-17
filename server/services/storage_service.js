const { Player, Salary } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    //return Player.findByPk(player_id);
    return Player.findOne({where: {player_id: player_id}})
  };

  createPlayer = async player => {
    //TODO 2: Use Player sequelize model to create a player
    return Player.create(player)
  };

  createSalary = async salary => {
    //TODO 4: Use Salary sequelize model to create a salary
    //create in postman as salary
    //{ "start_date":"2022-01-02","end_date":"2023-01-01","amount":100000,"player_id":1}
    return Salary.create(salary)
  };

  getSalary = async (salary_id) => {
    return await Salary.findByPk(salary_id, {include: Player})
  };


}

module.exports = new StorageService();
