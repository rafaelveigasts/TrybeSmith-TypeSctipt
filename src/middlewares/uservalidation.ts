import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';

const classValidation = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  
  if (classe === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Classe is required' });
  }

  if (typeof classe !== 'string') {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Classe must be a string' });
  }

  if (classe.length <= 2) {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Classe must be at least 2 characters' });
  }
  next();
};

const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Level is required' });
  }

  if (typeof level !== 'number') {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Level must be a number' });
  }

  if (level < 1) {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Level must be greater than 0' });
  }
  next();
};