pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Token {
  using SafeMath for uint;

  string public name = "Token Name";
  string public symbol = "TNT";
  uint256 public decimals = 18;
  uint256 public totalSupply;

  // mapping is key:value like type
  mapping(address => uint256) public balanceOf;   // track balances epi-20
  // "deployer" => allows "exchange" to spend => "value"
  mapping(address => mapping(address => uint256)) public allowance;  // approve epi-20

  // Events
  // transfer tokens epi-20
  event Transfer(address indexed from, address indexed to, uint256 value);
  // approve epi-20
  event Approval(address indexed owner, address indexed spender, uint256 value);

  constructor () public {
    totalSupply = 1000000 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;  // track balances epi-20
  }

  // transfer tokens epi-20
  function transfer(address _to, uint256 _value) public returns (bool success) {
    require(balanceOf[msg.sender] >= _value);
    _transfer(msg.sender, _to, _value);
    return true;
  }

  // internal function
  function _transfer(address _from, address _to, uint256 _value) internal {
    require(_from != address(0));
    require(_to != address(0));
    balanceOf[_from] = balanceOf[_from].sub(_value);
    balanceOf[_to] = balanceOf[_to].add(_value);
    emit Transfer(_from, _to, _value);
  }

  // approve epi-20
  function approve(address _spender, uint256 _value) public returns (bool success) {
    require(_spender != address(0));
    allowance[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    // the spender must have enough value
    require(_value <= balanceOf[_from]);
    // value must be less than the allowed for the exchange to spend
    require(_value <= allowance[_from][msg.sender]);
    allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);
    _transfer(_from, _to, _value);
    return true;
  }
}
