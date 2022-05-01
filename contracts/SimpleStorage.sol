// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

contract SimpleStorage{
    uint256 public number;

    function setNumber (uint256 _number) public{
        number = _number;
    }
}